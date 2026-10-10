// Tailwind class lists shared by the object, array and key-value blocks.
// They live under src/components so the app's Tailwind build scans them (see src/assets/vof-next.css).

// Indented block, drawn with a dashed guide line down the left and a dot where it ends
export const nested = [
  'relative z-[1] pl-5',
  'after:absolute after:top-[25px] after:left-[27px] after:-z-[1] after:h-[calc(100%-50px)] after:w-0 after:border-l after:border-dashed after:border-border',
  'before:absolute before:bottom-3 before:left-[22px] before:-z-[1] before:size-3 before:rounded-full before:bg-border',
].join(' ');

// A folded block shows its header only, so the guide line and dot go too
export const nestedFolded = 'before:hidden after:hidden';

// `group/header` lets the Form / YAML / JSON switch appear on hover (see Tabs.vue)
export const header = 'group/header mb-1 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-1';

export const title = 'm-0 flex min-w-0 items-center text-base font-medium text-heading';

export const foldIcon =
  'mr-2.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted [&>svg]:size-2.5';

// Key, value and action button in one row. A value that is itself a block or an input sits flush in its cell.
export const keyValueRow = [
  'grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-start gap-4',
  '[&>[data-vof-single]]:ml-0',
  '[&>[data-vof-nested]]:pl-0 [&>[data-vof-nested]]:after:left-2 [&>[data-vof-nested]]:before:left-1',
].join(' ');

// Per-item actions (reorder group, delete): `mt-1` centres the 28px small buttons on a 36px input
export const rowActions = 'mt-1 flex shrink-0 items-center gap-2';
