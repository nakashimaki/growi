import markdownItMermaid from '@liradb2000/markdown-it-mermaid'

export default class MermaidConfigurer {

  constructor(crowi) {
    this.crowi = crowi;
    const config = crowi.getConfig();
  }

  configure(md) {
    md.use(markdownItMermaid);
  }
}
