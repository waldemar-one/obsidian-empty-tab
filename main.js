const { Plugin } = require('obsidian');

module.exports = class EmptyTabPlugin extends Plugin {
	onload() {
		this.addCommand({
			id: 'empty-current-tab',
			name: 'Empty current tab',
			callback: () => {
				const leaf = this.app.workspace.getLeaf(false);
				if (leaf) {
					leaf.setViewState({ type: 'empty' });
				}
			}
		});
	}
};
