---
title: 'Paper Notes: ViT - An Image is Worth 16x16 Words'
date: 2025-05-01
summary: 'Reading notes on Vision Transformer, applying Transformer architecture to image classification.'
tags: ['Transformer', 'ViT', 'Image Classification']
lang: en
paper_url: 'https://arxiv.org/abs/2010.11929'
paper_venue: 'ICLR 2021'
---

## Paper Info

- **Title:** An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale
- **Authors:** Alexey Dosovitskiy et al.
- **Venue:** ICLR 2021
- **Link:** [arXiv](https://arxiv.org/abs/2010.11929)

## Key Idea

Split images into fixed-size patches (16x16), treat each patch as a token,
and apply a standard Transformer Encoder for image classification.

## Method

1. **Patch Embedding:** Split image into 16x16 patches, linear projection to embedding space
2. **Position Embedding:** Add learnable position encodings
3. **CLS Token:** Prepend a special classification token
4. **Transformer Encoder:** Standard multi-head self-attention + FFN

## Key Findings

- After pre-training on large datasets (JFT-300M), ViT matches or exceeds SOTA CNNs
- On smaller datasets, ViT underperforms CNNs (lacks inductive bias)
- Computationally efficient at larger scales compared to ResNet

## Thoughts

This work demonstrates the viability of Transformers in vision,
paving the way for CLIP, DALL-E, Swin Transformer, and more.
