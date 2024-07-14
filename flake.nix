{
  description = "Website for styx.";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixpkgs-unstable";
    };

    flake-utils = {
      url = "github:numtide/flake-utils";
    };
  };

  outputs = { self, nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        shell = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_20
            nodePackages.typescript-language-server
            # https://github.com/NixOS/nixpkgs/pull/319501
            (pkgs.callPackage ./nix/vtsls.nix {})
          ];
        };
      in
      {
        devShells = {
          default = shell;
        };
      });
}
