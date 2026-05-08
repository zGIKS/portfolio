---
title: Clean Operating System Architecture Guide for NixOS
author: Mateo
publishedAt: 2026-05-08
tags: nixos, guide, architecture, flakes
excerpt: A practical guide for structuring layered NixOS configurations around real operating system responsibilities, reusable modules, and clean flake composition.
---

## Overview

This guide provides a comprehensive step-by-step approach for implementing a scalable layered NixOS architecture following real operating system responsibilities instead of traditional business-oriented Domain-Driven Design (DDD).

Each layer represents a technical responsibility of the operating system and should remain isolated from unrelated concerns.

**“Descriptive/Role-based Naming”** or **“Explicit Responsibility Naming”** should be a principle when naming files and modules.

1. Completely avoid giant monolithic configuration files.
2. Completely avoid mixing unrelated operating system concerns.
3. Completely avoid host-specific configuration inside shared modules.
4. Shared functionality must be reusable through explicit module composition.
5. Every flake should represent a complete deployable system boundary.
6. Layers should communicate only through composition and dependency injection.
7. Prefer reusable modules over duplicated host configuration.

---

## Guide Map

1. Architecture model and philosophy
2. Flake and shared-module structure
3. Layer communication rules
4. System layers and their responsibilities
5. Real NixOS module composition
6. Dependency injection and host composition
7. Reusable library functions
8. DDD mapping and runtime orchestration
9. Overrides, shared outputs, and final model

---

## Architecture Philosophy

Traditional DDD models:

```txt id="5mz6h4"
business domains
entities
aggregates
bounded contexts
```

This architecture models:

```txt id="5uycc5"
computer systems
operating system responsibilities
runtime services
hardware abstraction
session management
```

The system is treated as a declarative operating system platform.

---

## What This Is (and Isn’t)

This is an organizational strategy for NixOS configuration that:

* enforces explicit responsibility boundaries (hardware vs network vs services vs session),
* improves reuse through real NixOS module composition, and
* avoids “one huge `configuration.nix`” monoliths.

It is **not** claiming NixOS has “layers” at runtime. This is about how you **structure modules at evaluation time**.

---

## Core Architecture Model

```txt id="i7e52f"
Flake (Composition Root)
│
├── Hardware Layer
├── Kernel Layer
├── Filesystem Layer
├── Networking Layer
├── Services Layer
├── Packages Layer
└── Session Layer
```

---

## Flake Architecture

A flake is NOT considered a layer.

A flake acts as:

```txt id="oofr4r"
Composition Root
System Boundary
Deployment Unit
Dependency Graph
```

Each flake represents a fully composable machine or platform.

Examples:

```txt id="nsjlwm"
laptop
desktop
server
homelab
workstation
```

---

## Shared Architecture

The shared flake contains reusable system capabilities.

Examples:

```txt id="rjlwm"
shared packages
shared services
shared overlays
shared session modules
shared infrastructure
```

---

## Recommended Folder Structure

```txt id="thjlwm"
platform/
├── flake.nix
├── hosts/
│   ├── laptop/
│   ├── desktop/
│   └── server/
├── modules/
│   ├── hardware/
│   ├── kernel/
│   ├── filesystem/
│   ├── networking/
│   ├── services/
│   ├── packages/
│   ├── session/
│   └── users/
├── lib/
├── overlays/
└── packages/
```

**Recommendation:** prefer **one flake** per repo with multiple `nixosConfigurations` (one per host). If you later split into multiple flakes, do it for real boundaries (separate repo, separate lifecycle), not just “one host = one flake”.

---

## Layer Communication Rules

Layers should communicate only through:

```txt id="wmjlwm"
imports
module composition
dependency injection
flake inputs/outputs
```

Avoid direct responsibility violations.

---

## Correct Communication Example

```txt id="nyjlwm"
Session Layer
    ↓
Services Layer
    ↓
Kernel Layer
```

---

## Incorrect Communication Example

```txt id="a4jlwm"
Session directly configuring hardware
Packages directly managing firewall rules
Filesystem directly controlling sessions
```

---

## System Layers

The following layers organize operating system responsibilities into focused module groups.

---

## 1. Hardware Layer

Location: `modules/hardware/`

The Hardware Layer contains all physical machine configuration and hardware abstraction.

Examples:

* CPU configuration
* GPU drivers
* Bluetooth
* Audio devices
* Firmware
* Power management
* Device enablement

### Structure Example

```txt id="l1jlwm"
modules/hardware/
├── cpu.nix
├── gpu.nix
├── bluetooth.nix
├── audio.nix
├── disks.nix
└── battery.nix
```

### Responsibilities

* Hardware abstraction
* Device drivers
* Firmware loading
* Machine-specific tuning
* Physical device configuration

### Examples

```nix id="ckjlwm"
hardware.bluetooth.enable = true;
```

```nix id="gjlwm"
hardware.opengl.enable = true;
```

### Checklist

* [ ] Hardware-only configuration
* [ ] Device enablement
* [ ] Firmware management
* [ ] Audio and Bluetooth setup
* [ ] GPU and CPU configuration
* [ ] Physical hardware abstraction

---

## 2. Kernel Layer

Location: `modules/kernel/`

The Kernel Layer manages Linux kernel behavior and low-level system runtime configuration.

Examples:

* Kernel modules
* Sysctl
* Bootloader
* Scheduler tuning
* Kernel parameters
* Initrd

### Structure Example

```txt id="jlwm"
modules/kernel/
├── boot.nix
├── modules.nix
├── sysctl.nix
└── scheduler.nix
```

### Responsibilities

* Linux kernel management
* Runtime tuning
* Boot process
* Kernel scheduling
* System-level behavior

### Examples

```nix id="djlwm"
boot.kernelPackages = pkgs.linuxPackages_latest;
```

```nix id="4qjlwm"
boot.kernel.sysctl."vm.swappiness" = 10;
```

### Checklist

* [ ] Kernel-only logic
* [ ] Sysctl tuning
* [ ] Bootloader configuration
* [ ] Initrd setup
* [ ] Kernel scheduling
* [ ] Runtime optimization

---

## 3. Filesystem Layer

Location: `modules/filesystem/`

The Filesystem Layer manages storage organization and persistence behavior.

Examples:

* Btrfs
* ZFS
* Mount points
* Swap
* Impermanence
* Disk layouts

### Structure Example

```txt id="tJSGlobal"
modules/filesystem/
├── btrfs.nix
├── mounts.nix
├── swap.nix
└── impermanence.nix
```

### Responsibilities

* Storage organization
* Persistence strategy
* Mount management
* Disk structure
* Filesystem optimization

### Examples

```nix id="hjlwm"
fileSystems."/".fsType = "btrfs";
```

```nix id="qjlwm"
swapDevices = [
  { device = "/swapfile"; }
];
```

### Checklist

* [ ] Filesystem-only logic
* [ ] Mount management
* [ ] Persistence configuration
* [ ] Disk layout organization
* [ ] Swap management
* [ ] Storage abstraction

---

## 4. Networking Layer

Location: `modules/networking/`

The Networking Layer handles communication and network infrastructure.

Examples:

* DNS
* Firewall
* Remote access (transport/config; the OpenSSH daemon itself lives in Services)
* VPN
* WiFi
* Hostnames
* NetworkManager

### Structure Example

```txt id="mjlwm"
modules/networking/
├── firewall.nix
├── dns.nix
├── tailscale.nix
├── wifi.nix
└── hostname.nix
```

### Responsibilities

* Network communication
* Firewall management
* DNS resolution
* VPN integration
* Remote access
* Network security

### Examples

```nix id="5jlwm"
networking.hostName = "desktop";
```

```nix id="vJSGlobal"
networking.firewall.enable = true;
```

### Checklist

* [ ] Networking-only configuration
* [ ] Firewall rules
* [ ] DNS setup
* [ ] VPN configuration
* [ ] SSH management
* [ ] Wireless networking

---

## 5. Services Layer

Location: `modules/services/`

The Services Layer contains background daemons and runtime system services.

Examples:

* Docker
* PostgreSQL
* Nginx
* PipeWire
* Syncthing
* Printing services

### Structure Example

```txt id="9jlwm"
modules/services/
├── docker.nix
├── postgres.nix
├── nginx.nix
├── pipewire.nix
├── openssh.nix
└── syncthing.nix
```

### Responsibilities

* Daemon orchestration
* Background services
* Runtime process management
* Service dependencies
* Long-running system processes

### Examples

```nix id="7jlwm"
virtualisation.docker.enable = true;
```

```nix id="wjlwm"
services.postgresql.enable = true;
```

```nix id="sshExample"
services.openssh.enable = true;
```

### Checklist

* [ ] Service-only configuration
* [ ] Daemon management
* [ ] Runtime services
* [ ] Background processes
* [ ] Service orchestration
* [ ] Dependency management

---

## 6. Packages Layer

Location: `modules/packages/`

The Packages Layer manages software installation and reusable package groups.

Examples:

* CLI tools
* Browsers
* Editors
* Fonts
* Development tooling
* GUI applications

### Structure Example

```txt id="fjlwm"
modules/packages/
├── cli.nix
├── gui.nix
├── browsers.nix
├── fonts.nix
└── devtools.nix
```

### Responsibilities

* Package installation
* Software grouping
* Shared package collections
* Development tooling
* Application availability

### Important Note (Avoid “Global Monolith Packages”)

This layer should not become a single “global list of everything”.

Prefer exporting **small, purpose-driven package profiles** (e.g. `profiles/dev`, `profiles/media`, `profiles/minimal`) and import them **where needed** (host, user, workstation role, service module). If a package is tightly coupled to a service/module, keep it next to that module.

### Examples

```nix id="yjlwm"
environment.systemPackages = with pkgs; [
  git
  neovim
  firefox
];
```

### Checklist

* [ ] Package-only organization
* [ ] Shared software groups
* [ ] Development tooling
* [ ] GUI applications
* [ ] Fonts and assets
* [ ] Reusable software collections

---

## 7. Session Layer

Location: `modules/session/`

The Session Layer manages the graphical session and user interaction experience.

Examples:

* Sway
* Hyprland
* Waybar
* Wofi
* Notifications
* Themes
* Display managers

### Structure Example

```txt id="xjlwm"
modules/session/
├── sway.nix
├── hyprland.nix
├── waybar.nix
├── wofi.nix
├── mako.nix
├── graphics.nix
└── theme.nix
```

### Responsibilities

* Window manager configuration
* Desktop session management
* User interaction
* UI customization
* Graphical workflows
* Desktop experience

### Examples

```nix id="cjlwm"
programs.sway.enable = true;
```

```nix id="rjlwm"
programs.hyprland.enable = true;
```

```nix id="videoDriversExample"
services.xserver.videoDrivers = [ "nvidia" ];
```

### Checklist

* [ ] Session-only configuration
* [ ] Window manager setup
* [ ] Desktop UX management
* [ ] Notification systems
* [ ] Theme configuration
* [ ] User interaction workflows

---

## Shared Flake Communication

Flakes communicate through:

```txt id="t6jlwm"
inputs
outputs
modules
packages
overlays
```

Communication happens during:

```txt id="w4jlwm"
evaluation time
build time
composition time
```

NOT during runtime.

---

## How to Write a Real NixOS Module (options + config)

Composition in NixOS is built on modules that declare **typed options** and then set **config** based on those options.

Minimal pattern:

```nix
{ lib, config, pkgs, ... }:
let
  cfg = config.platform.services.myService;
in
{
  options.platform.services.myService = {
    enable = lib.mkEnableOption "myService";
    port = lib.mkOption {
      type = lib.types.port;
      default = 8080;
      description = "TCP port for myService.";
    };
  };

  config = lib.mkIf cfg.enable {
    systemd.services.myService = {
      wantedBy = [ "multi-user.target" ];
      serviceConfig.ExecStart = "${pkgs.myService}/bin/myService --port ${toString cfg.port}";
    };

    networking.firewall.allowedTCPPorts = [ cfg.port ];
  };
}
```

---

## Dependency Injection in NixOS (specialArgs / extraSpecialArgs)

In NixOS, “dependency injection” usually means passing extra values into module evaluation using:

* `specialArgs` for NixOS modules (`nixosSystem { specialArgs = { ...; }; }`)
* `extraSpecialArgs` for Home Manager modules (when embedded)

Example (single flake, multiple hosts):

```nix
{
  outputs = { self, nixpkgs, ... }:
  let
    mkHost = hostName: system: nixpkgs.lib.nixosSystem {
      inherit system;
      specialArgs = { inherit hostName; };
      modules = [ ./hosts/${hostName} ];
    };
  in {
    nixosConfigurations = {
      laptop = mkHost "laptop" "x86_64-linux";
      desktop = mkHost "desktop" "x86_64-linux";
    };
  };
}
```

---

## Host Composition Example (Selecting Layers)

The host module is where you actually **select which layers/modules apply** to that machine.

Example `hosts/laptop/default.nix`:

```nix
{ ... }:
{
  imports = [
    ../../modules/hardware
    ../../modules/kernel
    ../../modules/filesystem
    ../../modules/networking
    ../../modules/services
    ../../modules/session
    ../../modules/users

    # Optional profiles (small, purpose-driven)
    ../../modules/packages/profiles/dev.nix
  ];

  # Host-specific facts live here (or are injected via specialArgs).
  networking.hostName = "laptop";
}
```

This is the “composition root” at the host level: it wires responsibilities together without leaking host-specific details into shared modules.

---

## Pure Functions in `lib/` (Reusable Logic)

Reusable logic that should not be an option/module belongs in `lib/` as **pure functions** (helpers, generators, normalizers).

Pattern:

```nix
### lib/default.nix
{ lib }:
{
  mkIfNotNull = v: x: lib.mkIf (v != null) x;
}
```

Pass it via `specialArgs` so modules can call `platformLib.mkIfNotNull`.

---

## Mapping to DDD (Why This Doesn’t “Replace” It)

DDD models business domains; NixOS modules compose system configuration. Different concerns.

Useful mental mapping:

* **Bounded Context** → flake/repo boundary (ownership + lifecycle)
* **Entities / Value Objects** → typed options + immutable Nix values (`mkOption`, `types`)
* **Domain Services** → pure helper functions in `lib/`
* **Aggregates** → `nixosSystem { modules = [ ... ]; }` plus the cohesive module subtree it composes
* **Commands** → operational actions like `nixos-rebuild switch`, `nix build`, `nix flake check`
* **Queries** → evaluation/introspection like `nix eval`, `nixos-option`, `nix path-info`
* **ACL / Policy** → overlays + module policy (what packages/config are allowed), plus option constraints (types/assertions)

---

## “Domain Events” Analogy (Orchestration via systemd)

NixOS is not event-driven at evaluation time, but at runtime **systemd unit ordering** plays a similar orchestration role:

```nix
systemd.services.app = {
  wantedBy = [ "multi-user.target" ];
  after = [ "network-online.target" "postgresql.service" ];
  requires = [ "postgresql.service" ];
};
```

Think of this as “reacting to readiness” (targets/services becoming active) rather than emitting domain events in code.

---

## Overrides and Merge Mechanics (How Upper Layers Win)

Layering without breaking composition depends on NixOS’ merge semantics:

* `lib.mkDefault` → provide a lower-priority default a higher layer/host can override.
* `lib.mkForce` → force a value (use sparingly; it can hide conflicts).
* `lib.mkMerge` → combine multiple config fragments predictably.

Example:

```nix
{ lib, ... }:
{
  networking.firewall.enable = lib.mkDefault true;

  # Host wants to disable it explicitly:
  # networking.firewall.enable = lib.mkForce false;

  environment.systemPackages = lib.mkMerge [
    [ ]
    [ ]
  ];
}
```

Use these instead of copy/pasting or “monolithic replacement modules”.

---

## Shared Outputs Example

```nix id="2jlwm"
{
  outputs = { self, nixpkgs }: {

    nixosModules = {
      docker = import ./modules/services/docker.nix;
      sway = import ./modules/session/sway.nix;
    };

    overlays.default = import ./overlays/default.nix;

  };
}
```

---

## Shared Consumption Example

```nix id="njlwm"
{
  inputs.shared.url = "../shared";

  outputs = { self, nixpkgs, shared }: {

    nixosConfigurations.laptop =
      nixpkgs.lib.nixosSystem {

        modules = [
          shared.nixosModules.docker
          shared.nixosModules.sway
        ];

      };
  };
}
```

---

## Reusable Applications

Reusable applications should be exposed through:

```txt id="j4jlwm"
packages
overlays
modules
```

depending on the responsibility.

---

## Final Architecture Model

```txt id="m7jlwm"
Flake (Composition Root)
│
├── Hardware Layer
├── Kernel Layer
├── Filesystem Layer
├── Networking Layer
├── Services Layer
├── Packages Layer
└── Session Layer
```

Shared reusable infrastructure:

```txt id="kwjlwm"
shared/
```

Host-specific systems:

```txt id="gtjlwm"
laptop/
desktop/
server/
```

This architecture models a computer as a modular declarative operating system platform using clean layered system design principles rather than business-oriented DDD patterns.
