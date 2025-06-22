# CLAUDE.md

日本語で返答してください。

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a ranking system for e-typing variety games (13 categories total). The project creates a ranking page that displays the total scores across all variety categories to encourage participation in lesser-played e-typing variety games.

## Current Status

This repository is in the initial planning phase with only documentation files:
- `README.md`: Basic project information
- `design.md`: Detailed design specification in Japanese

## Architecture & Design

### Core Concept

- Tracks scores across 13 e-typing variety categories: ビジネス, スタディ, ライフ, トラベル, スポーツ, なんだろな？, 脳トレ, 方言, 長文, テンキー, 百人一首, しりとり, 医療介護
- Calculates total scores and maintains rankings
- Handles username mapping (e-typing allows name changes, so multiple registration names may belong to the same user)

### Implementation Plan (from design.md)

1. **Initial Phase**: Google Sheets-based solution with 4 sheets:
   - ランキング (Rankings display)
   - スコア登録（自動）(Automatic score registration)
   - スコア登録（手動）(Manual score registration)
   - 登録名・ユーザー名対応表 (Registration name to username mapping)

2. **Future Phase**: Web application that reads from the spreadsheet

### Data Collection Constraints

- e-typing data fetching limited to ~1 week intervals to avoid site overload
- Manual score updates needed for real-time ranking changes
- Must respect e-typing terms of service

## Important Notes

- The project involves web scraping e-typing rankings (160 total pages across 13 categories)
- Need to handle rate limiting and respect robots.txt/ToS
- User privacy consideration: username mapping system required
- Text content is primarily in Japanese

## Development Guidelines

Since this is a new project with no existing codebase:
- Follow Japanese naming conventions where appropriate for user-facing elements
- Implement proper rate limiting for any web scraping functionality
- Consider data persistence and backup strategies for ranking data
- Plan for scalability if moving from spreadsheet to web application