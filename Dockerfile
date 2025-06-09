# Dockerfile para projeto Next.js

# Multi-stage build para otimizar o tamanho da imagem final

# Stage 1: Build dependencies e aplicação
FROM node:18-alpine AS builder

# Instalar dependências necessárias para algumas bibliotecas nativas
RUN apk add --no-cache libc6-compat

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração de dependências
COPY package.json package-lock.json* ./

# Instalar dependências
RUN npm ci

# Copiar todo o código fonte
COPY . .

# Desabilitar telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED 1
ENV RESEND_API_KEY="KEY"
ENV UMAMI_DOMAIN="DOMAIN"
ENV UMAMI_SITE_ID="ID"
ENV NEXT_PUBLIC_WS_URL="WS_URL"

# Fazer o build da aplicação
RUN npm run build

# Stage 2: Produção - imagem final otimizada
FROM node:18-alpine AS runner

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários do stage anterior
COPY --from=builder /app/public ./public

# Copiar arquivos de build do Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mudar para usuário não-root
USER nextjs

# Expor porta 3000
EXPOSE 3000

# Definir variável de ambiente para porta
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar a aplicação
CMD ["node", "server.js"]