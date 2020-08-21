'use strict';
import * as vscode from 'vscode';
import * as lc from 'vscode-languageclient';

export function activate(context: vscode.ExtensionContext) {
    const run: lc.Executable = {
        command: 'rnix-lsp',
        options: { cwd: '.' }
    };

    new lc.LanguageClient(
        'rnix-lsp',
        'Nix Language Server',
        { run, debug: run },
        { documentSelector: [{ scheme: 'file', language: 'nix' }] },
    ).start();
}

export function deactivate() {}
