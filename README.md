# Empty Tab

Adds a single command to Obsidian's Command Palette that replaces the current tab with an empty page — the same screen you see when opening a brand new tab (`Ctrl/Cmd + T`).

## Usage

1. Open the Command Palette (`Ctrl/Cmd + P`).
2. Run **Empty Tab: Empty current tab**.
3. The active tab is cleared to the empty state. The tab itself stays open, nothing is closed or removed from history.

## Installation

### From Community Plugins (once approved)

1. Open **Settings → Community plugins → Browse**.
2. Search for "Empty Tab".
3. Select **Install**, then **Enable**.

### Manual install

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](../../releases/latest).
2. Copy them into `<YourVault>/.obsidian/plugins/empty-tab/`.
3. Reload Obsidian and enable **Empty Tab** under Community plugins.

## How it works

The plugin calls `workspace.getLeaf(false)` to get the currently active leaf, then `setViewState({ type: 'empty' })` to switch it to Obsidian's built-in empty view. No files are read, written, or deleted, and the plugin makes no network requests.

## Support

Found a bug or have a feature request? Open an issue in this repository.

## License

[MIT](LICENSE)
