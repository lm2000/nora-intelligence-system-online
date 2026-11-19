// Website-only color adaptation. Geometry, labels, IDs and canonical files stay intact.
const colors = {
  '#fff': '#132231', '#ffffff': '#132231',
  '#182d48': '#edf5f8', '#183c46': '#edf5f8',
  '#53647d': '#b7cbd6', '#5b6e87': '#b7cbd6',
  '#eff6ff': '#142d43', '#f4f9ff': '#102638', '#3778b9': '#79b9ef', '#4384bf': '#79b9ef',
  '#2768a4': '#79b9ef', '#37688f': '#79b9ef', '#376f9e': '#79b9ef', '#177cb3': '#79b9ef',
  '#f3efff': '#29233f', '#f4f0fc': '#29233f', '#7962bd': '#b5a1ef',
  '#edf9f5': '#12332f', '#d5f2e9': '#12332f', '#21836c': '#70cfb2', '#17675f': '#70cfb2',
  '#fff6e8': '#362d1a', '#b9842f': '#e4bc70', '#765b28': '#e4bc70', '#966a25': '#e4bc70',
  '#fff0f3': '#3b2230', '#ce5166': '#efa0b0',
  '#f5f7fa': '#1b2b3a', '#f7f9fc': '#1b2b3a', '#f1f7f6': '#1b2b3a',
  '#71829a': '#91a8bc', '#879ab1': '#91a8bc', '#7d8ca3': '#91a8bc',
  '#537d80': '#91a8bc', '#789b9c': '#91a8bc',
  '#eaf0f6': '#132231', '#f0f4f3': '#132231', '#cfe4fb': '#254459',
  '#d2ddea': '#456174', '#dce5ef': '#456174', '#b8c9db': '#456174', '#b9cecd': '#456174'
};
export function navyDiagram(svg) {
  return svg.replace(/#[0-9a-f]{3,8}\b/gi, color => colors[color.toLowerCase()] || color);
}
