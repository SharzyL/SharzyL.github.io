const visit = require("unist-util-visit")

const modifyImgNode = ({ markdownAST }, pluginOptions) => {
    visit(markdownAST, "paragraph", node => {
        const childNodes = node.children
        if (childNodes && childNodes.length === 1 && childNodes[0].type === "image"){
            const imageNode = childNodes[0]
            const altText = imageNode.alt.replaceAll('"', '&quot;')
            const imgUrl = imageNode.url
            node.type = "html"
            node.children = undefined
            node.value = `<p class="img-para"><img src="${imgUrl}" alt="${altText}"/></p>`
        }
    })
    return markdownAST
}

module.exports = modifyImgNode
