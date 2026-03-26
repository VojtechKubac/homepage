# DevOps -- CI/CD, Packaging, and Testing Infrastructure

## Overview

I handle the DevOps side of the TCAE platform -- setting up the CI pipeline, creating the packaging system for Linux and Windows distributions, and pioneering unit testing practices within the team.

## CI/CD Pipeline

I set up the **GitLab CI pipeline** that automates the build-test cycle:

### Pipeline Stages

1. **Lint** -- clang-format check on merge request changes (CAEProcessor + ParaViewPlugins)
2. **Approve** -- manual gate to prevent unnecessary builds
3. **Build CAEProcessor** -- compiles the C++ backend with CMake
4. **Test CAEProcessor** -- runs the CTest suite
5. **Build ParaView Plugins** -- compiles the GUI plugins (depends on CAEProcessor artifacts)
6. **Test ParaView Plugins** -- headless plugin tests (offscreen Qt rendering)
7. **Deploy** -- license dashboard deployment (develop branch only)

### Pipeline Features

- **Sparse Git checkout** -- only fetches files needed for each job, reducing bandwidth on the large monorepo
- **Build artifact passing** -- compiled binaries flow between stages with 1-day expiry
- **Auto-cancellation** -- new commits cancel in-flight pipelines
- **Resource groups** -- serializes Linux build jobs to prevent resource contention

## Package Creation

### Linux Installer

Self-extracting shell script archive:

- Packs tracked Git files plus compiled binaries
- Compresses with multi-threaded xz (ships embedded xz binary for portability)
- Produces a single `.sh` file that extracts and installs the complete platform
- Version-tagged from Git (format: `TCAE-VERSION-DATE-BRANCH-linux64.sh`)
- Integrity checks: fails if uncommitted modifications exist

### Windows Installer

NSIS-based installer packaging:

- Bundles ParaView, Gnuplot, MSMPI, Cygwin, CalculiX, NetGen, Gmsh, and other dependencies
- Handles case-sensitive filesystem requirements (Windows-specific)
- Supports full and minimal installation types
- Separate build scripts for CAEProcessor, ParaView Plugins, and OpenFOAM extensions (cross-compiled with Ninja)
- Hotfix patch installer for incremental updates

## Unit Testing

I pioneered unit testing in the team, establishing CTest as the primary testing framework:

### Test Coverage

- **TCFD:** backward compatibility, configuration parsing (transport models, parameters)
- **TFEA:** configuration parsing (materials, regions, FSI settings, periodicity, modal analysis, solver)
- **TCAA:** configuration parsing (source, physical constants, analogy settings, observers)
- **TOPT:** optimization algorithms (DIRECT on integer and mixed spaces)
- **TBASE:** project reading, import operations, parameter creation, database transactions
- **Common:** BLAS operations, time utilities, keyword parsing

### Test Infrastructure

- CMake-integrated via `add_test()` with conditional compilation based on available dependencies
- Optional FSeam mocking framework for isolated module testing
- Test databases (`.tbase` files) for database operation verification
- CI integration: `ctest --output-on-failure` runs automatically on every pipeline execution
