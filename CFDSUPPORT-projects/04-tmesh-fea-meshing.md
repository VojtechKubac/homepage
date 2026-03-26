# TMESH for FEA -- Structural Meshing Infrastructure

## Overview

The TMESH module handles all meshing in the TCAE platform. While CFD meshing (using OpenFOAM's snappyHexMesh) existed before my involvement, I built most of the FEA meshing pipeline -- the infrastructure that takes CAD geometry and produces volumetric finite element meshes suitable for structural and thermal analysis in the TFEA module.

## What It Does

- **Geometry import** -- reads STL surface meshes and STEP CAD models for structural components
- **Automatic volume meshing** -- generates tetrahedral/hexahedral meshes from surface geometry using NetGen or Gmsh
- **Pre-generated mesh import** -- accepts meshes in NetGen (VOL), Gmsh (MSH), or Abaqus (INP) formats
- **Multi-component support** -- handles assemblies with multiple solid components, each with independent meshing parameters
- **Mesh quality control** -- configurable element sizing, optimization, and quality checking

## Technical Scope

### Dual Meshing Engine Support

I integrated two meshing backends, giving users flexibility based on their geometry and requirements:

**NetGen:**

- Automatic tetrahedral meshing from STL or STEP geometry
- Coarseness presets (very coarse to very fine) plus manual element size control (hMax, hMin)
- Advanced surface recognition parameters for STL input (chart distance, edge angles, curvature)
- Built-in mesh optimization (2D and 3D smoothing steps)
- Surface normal preprocessing via `surfaceOrient` tool

**Gmsh:**

- Alternative meshing engine with different algorithm options
- Multiple 2D algorithms (Delaunay, frontal, BAMG) and 3D algorithms (Delaunay, frontal, HXT)
- Curvature-based size adaptation
- Option to use NetGen's optimizer as a final step
- Configuration via generated `.geo` scripts

### FEA vs. CFD Mesh Distinction

The FEA and CFD meshing paths are fundamentally different:

| Aspect          | FEA Mesh                        | CFD Mesh                         |
| --------------- | ------------------------------- | -------------------------------- |
| Representation  | `SolidMesh` (nodes + elements)  | `RegionMesh` (OpenFOAM polyMesh) |
| Element types   | Tetrahedra, hexahedra, prisms   | Hex-dominant with layers         |
| Boundary layers | Not needed                      | Critical (y+ refinement)         |
| Tools           | NetGen, Gmsh                    | snappyHexMesh                    |
| Input           | STL, STEP, pre-generated meshes | STL surfaces                     |

### Mesh Format Ecosystem

The common mesh library I contributed to supports reading and writing:

- **VOL** -- NetGen native volumetric format
- **MSH** -- Gmsh native format
- **INP** -- Abaqus/CalculiX input format (also used by TFEA)
- **STL** -- Surface triangulation
- **STEP** -- CAD geometry (via OpenCASCADE)

### Element Support

- Linear elements (4-node tetrahedra, 8-node hexahedra)
- Quadratic elements (10-node tetrahedra, 20-node hexahedra)
- Mixed linear/quadratic within the same mesh
- Element connectivity, surface data, and component information preserved through format conversions

## Implementation

The FEA meshing code lives within the TMESH module alongside the CFD meshing code, sharing the same configuration parsing and execution framework. Key implementation areas:

- **Configuration:** `SolidComponent` and `SolidComponentAdvancedMeshingOptions` data structures with per-component meshing engine selection and parameters
- **Execution:** `createFEAMesh()` orchestrates the pipeline -- geometry preprocessing, mesher invocation, result parsing, quality checking, multi-component merging
- **User hooks:** UDF execution points before and after FEA meshing for custom scripting

## Key Engineering Challenges

- Supporting two fundamentally different meshing engines (NetGen, Gmsh) behind a unified configuration interface
- Handling the variety of input geometry quality -- STL files with inconsistent normals, degenerate triangles, gaps
- Reliable mesh format conversion preserving element connectivity, component boundaries, and surface associations
- Integrating the FEA meshing path cleanly into the existing TMESH module that was originally designed only for CFD meshing
