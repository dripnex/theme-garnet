/**
 * Garnet — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Deep mineral night, garnet red accent.
 * Distinct from velvet, cinnabar, sakura, maple, ember,
 * noir, ash, ink, umber, lapis.
 */

const TOKENS = {
  '--bg-base': '#120e10',
  '--bg-surface': '#1c1619',
  '--bg-elevated': '#2a2125',
  '--bg-inset': '#0a0809',
  '--bg-hover': 'rgba(242, 232, 234, 0.06)',
  '--bg-active': 'rgba(242, 232, 234, 0.1)',
  '--text-primary': '#f2e8ea',
  '--text-secondary': 'rgba(242, 232, 234, 0.74)',
  '--text-muted': 'rgba(242, 232, 234, 0.52)',
  '--text-faint': 'rgba(242, 232, 234, 0.34)',
  '--border': 'rgba(242, 232, 234, 0.12)',
  '--border-subtle': 'rgba(242, 232, 234, 0.07)',
  '--border-strong': 'rgba(242, 232, 234, 0.18)',
  '--accent': '#b83a4a',
  '--accent-hover': '#d04d5e',
  '--accent-muted': 'rgba(184, 58, 74, 0.2)',
  '--accent-subtle': 'rgba(184, 58, 74, 0.1)',
  '--glass-bg': 'rgba(18, 14, 16, 0.92)',
  '--glass-border': 'rgba(242, 232, 234, 0.1)',
  '--glass-bg-menu': 'rgba(42, 33, 37, 0.96)',
  '--glass-border-menu': 'rgba(242, 232, 234, 0.1)',
  '--status-active': '#b83a4a',
  '--status-on-hold': '#c9a45c',
  '--status-completed': '#5fa88a',
  '--status-dropped': '#cf6875',
};

module.exports = {
  id: 'theme-garnet',
  name: 'Garnet',
  version: '0.1.0',
  description: 'Deep mineral dark. Garnet red mark.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-garnet',
      name: 'Garnet',
      description: 'Deep mineral dark. Garnet red mark.',
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
