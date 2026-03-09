#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🐳 Building and Pushing Docker Image to GHCR${NC}"
echo "================================================"

# Configuration
GITHUB_TOKEN="${GITHUB_TOKEN:-$(echo $GITHUB_TOKEN)}" # Ensure GITHUB_TOKEN is set
REGISTRY="ghcr.io"
IMAGE_NAME="husainf4l/rovex/rovex-home"
VERSION=$(cat VERSION 2>/dev/null || echo "1.0.0")

# Full image paths
IMAGE_VERSIONED="${REGISTRY}/${IMAGE_NAME}:${VERSION}"
IMAGE_LATEST="${REGISTRY}/${IMAGE_NAME}:latest"

echo -e "${BLUE}📝 Image Details:${NC}"
echo "   Registry: ${REGISTRY}"
echo "   Repository: ${IMAGE_NAME}"
echo "   Version: ${VERSION}"
echo "   Platform: linux/amd64"
echo ""

# Step 1: Login to GitHub Container Registry
echo -e "${BLUE}🔑 Step 1/4: Logging in to GitHub Container Registry...${NC}"
echo "${GITHUB_TOKEN}" | docker login ${REGISTRY} -u husainf4l --password-stdin

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Login successful${NC}"
else
    echo -e "${RED}❌ Login failed${NC}"
    exit 1
fi
echo ""

# Step 2: Build Docker image for linux/amd64
echo -e "${BLUE}🏗️  Step 2/4: Building Docker image for linux/amd64...${NC}"
docker build \
    --platform linux/amd64 \
    -f docker/Dockerfile \
    -t ${IMAGE_VERSIONED} \
    -t ${IMAGE_LATEST} \
    .

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo ""

# Step 3: Push versioned image
echo -e "${BLUE}📤 Step 3/4: Pushing ${IMAGE_VERSIONED}...${NC}"
docker push ${IMAGE_VERSIONED}

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Pushed ${IMAGE_VERSIONED}${NC}"
else
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi
echo ""

# Step 4: Push latest image
echo -e "${BLUE}📤 Step 4/4: Pushing ${IMAGE_LATEST}...${NC}"
docker push ${IMAGE_LATEST}

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Pushed ${IMAGE_LATEST}${NC}"
else
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi
echo ""

# Success summary
echo "================================================"
echo -e "${GREEN}🎉 Success! Docker images pushed to GHCR${NC}"
echo ""
echo -e "${BLUE}📦 Available Images:${NC}"
echo "   ${IMAGE_VERSIONED}"
echo "   ${IMAGE_LATEST}"
echo ""
echo -e "${BLUE}🚀 Pull and run:${NC}"
echo "   docker pull ${IMAGE_LATEST}"
echo "   docker run -p 3000:3000 \\"
echo "     -e DATABASE_URL='postgresql://...' \\"
echo "     -e SECRET_KEY='your-secret-key' \\"
echo "     ${IMAGE_LATEST}"
echo ""
echo -e "${BLUE}🔗 View on GitHub:${NC}"
echo "   https://github.com/husainf4l/rovex/pkgs/container/rovex-home"
echo ""
