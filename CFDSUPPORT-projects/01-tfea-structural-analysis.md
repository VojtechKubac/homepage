# TFEA -- Finite Element Analysis Module

## Overview

TFEA is the structural and thermal analysis module of the TCAE simulation platform. It bridges the gap between CFD flow simulation and structural integrity assessment, enabling engineers to evaluate how aerodynamic and thermal loads affect solid components -- a critical step in turbomachinery and industrial equipment design.

I developed most of the TFEA module from scratch, building on the existing TMESH and TCFD infrastructure and following the established module patterns. The choice of CalculiX (CCX) as the FEA solver had already been made; everything else -- the data sharing pipeline, CCX input generation, result processing, FSI mapping, and GUI integration -- is my work.

## What It Does

- **Static structural analysis** (linear and nonlinear) for deformation and stress prediction
- **Thermal analysis** -- heat transfer, thermal stress, temperature-dependent material properties
- **Modal analysis** -- eigenfrequency extraction with participation factors and effective modal mass
- **Fluid-Structure Interaction (FSI)** -- maps CFD pressure and temperature fields onto the structural mesh for coupled analysis
- **Advanced loading** -- gravity, centrifugal forces, periodic boundary conditions for turbomachinery sectors

## Technical Scope

### CalculiX Integration

TFEA acts as an intelligent preprocessing and postprocessing layer around CalculiX. The module:

- Reads the TCAE configuration and generates complete CCX input decks (`.inp` files) -- materials, boundary conditions, element sections, analysis steps
- Manages CCX execution with proper environment setup
- Parses CCX result files (FRD format) and extracts displacements, stresses, temperatures, and modal data for visualization in ParaView

### FSI Data Mapping

The FSI pipeline is the core engineering challenge I solved. When coupling CFD results to structural analysis:

- An **octree-based spatial mapping** algorithm transfers pressure forces, temperature fields, and heat transfer coefficients from the CFD mesh to the FEA mesh
- Supports both **consistent** (interpolated) and **conservative** (force-preserving) mapping strategies
- Handles non-matching meshes with configurable distance tolerances
- Works across multiple speedlines and time points for turbomachinery applications
- Alternative CSV-based loading for externally provided force data

### Material Models and Boundary Conditions

- Isotropic and orthotropic material definitions with rectangular or cylindrical orientation
- Zero-displacement regions (fixed boundaries) defined by rectangular, cylindrical, or STL-based shapes
- Temperature BCs: fixed value, convective (HTC), heat flux
- Pressure loading regions with geometric selection
- Error estimation (Zienkiewicz-Zhu stress recovery, gradient-based)

## Implementation

**Backend:** ~7000 lines of C++23 across 15+ source files handling configuration parsing, CCX input generation, solver execution, and result postprocessing.

**GUI:** A full ParaView plugin (TFEAFilter) with VTK filters for materials, boundary condition regions, FSI coupling, modal analysis settings, and interactive 3D region visualization -- plus Qt property widgets for the ParaView properties panel.

**Testing:** CTest suite covering configuration parsing for materials, regions, FSI settings, periodicity, modal analysis, and solver parameters.

## Key Engineering Challenges

- Understanding the structural mechanics equations and CalculiX's input conventions to generate correct, robust input decks
- Designing the spatial mapping algorithm for FSI that handles the inherent mismatch between CFD and FEA discretizations
- Supporting the full range of turbomachinery workflows: multiple speedlines, rotating reference frames, sector periodicity
- Maintaining backward compatibility as the module evolved through multiple TCAE versions
