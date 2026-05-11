---
title: '论文笔记：ViT - An Image is Worth 16x16 Words'
date: 2025-05-01
summary: 'Vision Transformer 论文阅读笔记，将 Transformer 架构应用于图像分类任务。'
tags: ['Transformer', 'ViT', '图像分类']
lang: zh
paper_url: 'https://arxiv.org/abs/2010.11929'
paper_venue: 'ICLR 2021'
---

## 论文信息

- **标题:** An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale
- **作者:** Alexey Dosovitskiy et al.
- **发表:** ICLR 2021
- **链接:** [arXiv](https://arxiv.org/abs/2010.11929)

## 核心思想

将图像切分为固定大小的 patch（16x16），将每个 patch 视为一个 token，
直接使用标准 Transformer Encoder 进行图像分类。

## 方法

1. **Patch Embedding:** 将图像切为 16x16 的 patch，线性投影到 embedding space
2. **Position Embedding:** 加入可学习的位置编码
3. **CLS Token:** 添加一个特殊的分类 token
4. **Transformer Encoder:** 标准的 multi-head self-attention + FFN

## 关键结论

- 在大规模数据集（JFT-300M）上预训练后，ViT 能达到甚至超过 SOTA CNN 的性能
- 在中小规模数据集上，ViT 不如 CNN（缺少归纳偏置）
- 计算效率在大模型时优于 ResNet

## 个人思考

这篇工作证明了 Transformer 在视觉领域的可行性，
为后续 CLIP、DALL-E、Swin Transformer 等工作奠定了基础。
