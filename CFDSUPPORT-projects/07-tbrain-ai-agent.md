# TBRAIN (TAIGENT) -- AI-Assisted Simulation Setup

## Overview

TBRAIN ("The Brain"), part of the broader TAIGENT ("The AI GENeral Thing") initiative, is an AI agent integrated directly into the TCAE simulation platform. It assists engineers in configuring and running CFD/FEA simulations through natural language interaction. While no heavy implementation work has been done yet on my part, I've been actively involved in shaping the vision and participating in architectural decisions.

## What It Does

TBRAIN is a chat-based AI assistant embedded in the ParaView GUI that can:

- **Answer simulation questions** -- queries a RAG (Retrieval-Augmented Generation) knowledge base built from module documentation
- **Read and modify simulation settings** -- retrieves and sets keyword values in the active TCAE project
- **Query system information** -- checks available CPU cores, component dimensions
- **Launch simulations** -- triggers the full TCAE workflow (mesh, solve, analyze)

## Architecture

### LLM Backend

- Remote **Ollama** server hosting multiple open-source models (Qwen, LLaMA, Magistral)
- License-key authenticated HTTP API
- Supports swappable LLM and embedding models from the GUI

### RAG Knowledge Base

- Module-specific knowledge files (`TBRAIN-knowledge-tmesh.txt`, `TBRAIN-knowledge-tcfd.txt`, `TBRAIN-knowledge-tfea.txt`, etc.)
- Text chunks embedded via models like `nomic-embed-text` or `mxbai-embed-large`
- Cosine similarity retrieval at query time

### Tool Calling

The agent can invoke structured tools:
- `search_knowledge` -- RAG query against the knowledge base
- `get_keyword_values` / `set_keyword_values` -- read/write TCAE project configuration
- `get_available_processors` -- system info queries
- `get_component_size` -- geometry bounding box dimensions
- `run_all` -- execute simulation (deferred to GUI for safety)

### Integration

- **GUI:** Qt chat widget docked in ParaView with model selection dropdowns, HTML chat display, save/restart
- **Backend:** `AgentSession` class with PIMPL pattern for thread safety, async work queue, `std::jthread` worker
- **Monitoring:** Integrates with `pqTCAEMonitor` for real-time status updates

## My Involvement

My contributions are on the strategic and architectural side:

- Helping shape what TBRAIN should and shouldn't do -- defining the boundary between AI assistance and manual control
- Participating in architecture decisions: RAG vs. fine-tuning, self-hosted Ollama vs. cloud APIs, tool calling protocol design
- Contributing to the **keyword management system** -- a C++ metadata registry (~800 keywords across all modules) that serves as a single source of truth for TBRAIN's auto-generated knowledge base, TOPT's parameter space generation, and TBASE's parameter queries
- Evaluating embedding models and LLM options for the self-hosted deployment

## Future Direction

The keyword registry system I'm co-designing will enable TBRAIN to have structured, validated knowledge about every configurable parameter in the platform -- not just free-text documentation, but typed metadata with units, valid ranges, dependencies, and GUI paths. This foundation will also feed into the surrogate modeling work in TBASE, creating a unified data-and-AI layer across the platform.
