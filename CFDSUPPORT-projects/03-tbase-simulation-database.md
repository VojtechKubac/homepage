# TBASE -- Simulation Database and Results Management

## Overview

TBASE is the database and results management system of the TCAE platform. It stores, organizes, and queries simulation results across parametric design spaces -- enabling engineers to systematically explore how design parameters affect performance. Everything in TBASE -- the architecture, schema design, IPC protocol, GUI, and surrogate modeling work -- is my code.

## What It Does

- **Parametric result storage** -- stores complete simulation results (meshes, reports, quantities) indexed by design parameter values in SQLite databases (`.tbase` files)
- **Simulation management** -- import, export, compare, and filter simulations across multi-dimensional parameter spaces
- **Statistical analysis** -- min, max, mean, median, variance of tracked quantities across the design space
- **Project round-tripping** -- export individual simulation points back to full TCAE projects for further analysis
- **Geometry archival** -- stores both CFD and FEA meshes directly in the database for later retrieval and comparison

## Technical Scope

### Architecture

TBASE is a standalone subsystem with its own executable (`TBASEProcessor`), database layer, and IPC server:

- **Database layer** (`tbase-database`) -- SQLite-backed storage with RAII transaction guards, savepoints for nested transactions, and atomic multi-table operations
- **Manager** (`tbase-manager`) -- orchestrates database operations, job management, and IPC message processing
- **Module** (`tbase-module`) -- integrates with CAEProcessor for parameter and quantity tracking
- **Server** (`tbase-server`) -- IPC communication endpoint for the ParaView GUI
- **Serialization** -- binary serialization protocol for IPC message payloads

### Database Schema

The `.tbase` SQLite schema includes:

- **Simulations** -- parameter values, origins, timestamps for each design point
- **CFD/FEA Geometries** -- serialized mesh data (points, faces, elements, patches, cell zones)
- **Reports** -- simulation output reports from TCFD, TFEA, TCAA
- **Setup** -- parameter definitions, tracked quantities, baseline values
- **CommonFiles** -- shared scripts (initialization, transformation)
- **UserData** -- arbitrary files associated with individual simulations

### IPC Protocol

The ParaView GUI communicates with TBASEProcessor through a message-based protocol:

- Named pipe transport (cross-platform: Linux/macOS/Windows)
- Typed commands for database CRUD, simulation import/export, geometry retrieval, job progress polling
- Async worker threads for long operations (import, export) with progress reporting
- License validation integrated into the protocol

### Surrogate Modeling (Work in Progress)

Building on the parametric database foundation, I am developing surrogate modeling capabilities:

- The database already tracks full parametric spaces with computed quantities -- the training data
- Statistical functions provide uncertainty quantification primitives
- Infrastructure for model persistence via the existing serialization layer
- Goal: predict simulation outcomes for untested parameter combinations without running full CFD/FEA

## Implementation

**Backend:** 15+ source files covering database operations, IPC handling, import/export logic, project reading, serialization, and backward compatibility.

**GUI:** A complete ParaView plugin (TBASESource) with VTK sources for table display, geometry visualization, and simulation browsing -- plus 50+ Qt property widgets for database operations, parameter selection, and report management.

**Testing:** CTest suite covering project reading, import operations, parameter creation, and database transactions.

## Key Engineering Challenges

- Designing a SQLite schema flexible enough to handle arbitrary parameter spaces and simulation data types while maintaining query performance
- Implementing reliable RAII-based transaction management with nested savepoints for complex multi-step operations
- Building an async IPC protocol that keeps the ParaView GUI responsive during long database operations
- Serializing and deserializing complex mesh data (geometry, connectivity, patch information) efficiently for database storage
