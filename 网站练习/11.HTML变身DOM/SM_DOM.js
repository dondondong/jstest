const { Script } = require("vm");

const obj = {
    tagName: 'html',
    attributes: [{ lang: 'en' }],
    childrenTags: [
        {
            tagName: 'head',
            childrenTags: [{
                tagName: 'title',
                text: 'DOM练习'
            }]
        },
        {
            tagName: 'body',
            childrenTags: [
                { tagName: 'div' },
                { tagName: 'div', attributes: [{ id: 'tag' }], text: 'test' },
                {
                    tagName: 'ul', childrenTags: [
                        { tagName: 'li', text: '1' },
                        { tagName: 'li', text: '2' },
                        { tagName: 'li', text: '3' }
                    ]
                },
                { tagName: 'img' },
                { tagName: 'script' },
            ]
        }
    ]
}