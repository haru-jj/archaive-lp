#!/bin/bash
echo "Killing any existing Next.js processes..."
pkill -f "next dev" || true
sleep 2

echo "Starting Next.js development server..."
cd /Users/kodamatakumi/Desktop/ARCHAIVE_LP
npm run dev