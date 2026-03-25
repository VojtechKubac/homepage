# TCAA -- Computational Aero-Acoustics Module

## Overview

TCAA is the acoustic noise prediction module of the TCAE platform. It computes far-field sound radiation from CFD simulation data using acoustic analogies -- mathematical frameworks that separate the noise generation (computed by CFD) from the noise propagation (computed analytically).

I coded most of the TCAA module, which also required studying and understanding the underlying acoustic equations -- the Ffowcs-Williams-Hawkings analogy and Farassat's 1A time-domain formulation.

## What It Does

- **Far-field noise prediction** at arbitrary observer locations using the FW-H acoustic analogy
- **Signal processing** -- FFT, power spectral density, 1/3 octave band analysis, sound pressure levels (SPL)
- **Directivity analysis** -- polar plots showing how noise radiates in different directions
- **Surface source analysis** -- identifies which parts of a surface contribute most to noise at specific frequencies
- **Acoustic probes** -- monitors pressure, velocity, and density at arbitrary field locations during transient CFD
- **Sound synthesis** -- generates WAV audio files from predicted acoustic pressure signals

## Technical Scope

### Acoustic Analogy Implementation

The core computation uses the **Ffowcs-Williams-Hawkings (FW-H) equation** with the **Farassat 1A formulation**:

- Time-domain surface integral method computing thickness (monopole) and loading (dipole) noise contributions
- Computes time derivatives of surface normal velocity and pressure loading
- Integrates contributions from all surface elements to each observer location
- Implemented as an OpenFOAM utility (`acousticAnalogy`) that processes saved transient surface data

### Dual-Mode Operation

- **CFD-coupled mode**: Reads acoustic surface data saved during TCFD transient simulation -- automatically validates that TCFD completed and results are up-to-date
- **Standalone mode**: Processes externally provided surface data files, independent of TCFD

### Signal Processing Pipeline

After computing raw acoustic pressure time histories:

- **DC filtering** (high-pass) with Butterworth or Chebyshev filter options
- **Anti-aliasing filtering** (low-pass) with configurable cutoff
- **Windowing** -- Rectangle, Hann, Hamming, Triangle functions
- **FFT with overlapping segments** for power spectral density estimation
- **1/3 octave band aggregation** (12.5 Hz -- 20 kHz standard range)
- **Overall SPL (OSPL)** computation and loudest frequency identification

### Observer Configurations

- Single point observers at specified coordinates
- Batch observers from CSV coordinate files
- Circular observer distributions for directivity assessment (polar plots)

## Implementation

**Backend:** ~10,000 lines of C++23 across configuration parsing, OpenFOAM dictionary generation, calculation orchestration, threaded observer/probe evaluation, and report generation with Gnuplot visualization.

**OpenFOAM layer:** The FW-H analogy core lives in custom OpenFOAM classes -- `FfowcsWilliamsHawkings` orchestrator, `Farassat1AFormulation` solver, with a `GTFormulation` (Garrick Triangle) reserved for future use.

**GUI:** A ParaView plugin (TCAAFilter) with 12+ VTK sub-filters for observer placement, surface selection, filter configuration, frequency range settings, and report section selection -- plus ~10 Qt property widgets for the ParaView interface.

**Report output:** XML reports with embedded Gnuplot-generated plots covering temporal signals, PSD spectra, SPL bar charts, and polar directivity diagrams.

## Key Engineering Challenges

- Understanding the FW-H acoustic analogy mathematics and correctly implementing the Farassat 1A surface integrals
- Designing a robust signal processing pipeline that handles the numerical artifacts of discrete time-domain acoustic data
- Coordinating with TCFD's transient solver to ensure acoustic surface data is captured at sufficient temporal resolution
- Supporting turbomachinery-specific workflows with multiple speedlines and operating points
