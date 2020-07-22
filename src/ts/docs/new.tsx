import { I } from 'ts/lib';

const sc = 'bgColor bgColor-grey textColor textColor-red nw'

export default [
	{ type: I.BlockType.IconPage, icon: '👋' },
	{ type: I.BlockType.Title, text: `Updates for 22 July, 2020` },

	{ text: `Fixed syncing between devices. Now you finally can transfer data to another computer with the same mnemonic phrase. It's a simple implementation, so it can still lead to modification loss in case of concurrent changes in the same document. ` },
	{ style: I.TextStyle.Header3, text: `Also:` },
	{ style: I.TextStyle.Bulleted, text: `Redo <span class="${sc}">CMD + Shift + Z</span> is working properly now.`  },
	{ style: I.TextStyle.Bulleted, text: `Fixed shortcut for turn-into menu. It could launch with <span class="${sc}">?</span>, <span class="${sc}">,</span> in some keyboards.` },
	{ style: I.TextStyle.Bulleted, text: 'Disappearing symbols problem was solved. Split and merge blocks could lead to an unwanted state when typing fast.' },
	{ style: I.TextStyle.Bulleted, text: `Image. Bigger picture view was fixed.` },
	{ style: I.TextStyle.Bulleted, text: `Menu. Filtering. When using search make the first element now selected by default.` },
	{ style: I.TextStyle.Bulleted, text: `You can use shortcuts to go back and forward. To open the previous page from your history use <span class="${sc}">CMD + [</span> for macOS or <span class="${sc}">Alt + ←</span> for Windows. <span class="${sc}">CMD + ]</span> for macOS or <span class="${sc}">Alt + →</span> for Windows for another direction.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">CMD + /</span> now works with multiple blocks.` },
	{ style: I.TextStyle.Bulleted, text: 'Type <span class="bgColor bgColor-grey textColor textColor-red nw">```</span> to add a new code block.' },
	{ style: I.TextStyle.Bulleted, text: `We made dashboard style update and new geometric wallpapers.` },
	{ style: I.TextStyle.Bulleted, text: `Pin code verification was added in case you want to change or turn it off.` },
	{ style: I.TextStyle.Bulleted, text: `Now tha app saves it's size and position on exit.` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 15 July, 2020` },
	{ style: I.TextStyle.Header3, text: `Windows support is now (finally) available!` },
	{ text: `Also we have a list of fixed bugs and features & improvements implemented:` },
	{ style: I.TextStyle.Bulleted, text: `Chinese symbols input issues. Tested on Pinyin and Cangjie. For now, we use space and enter as symbol insertion, later we would implement numbers.` },
	{ style: I.TextStyle.Bulleted, text: `German keyboard shortcuts issue is now fixed. Try <span class="${sc}">Cmd + /</span> (<span class="${sc}">Cmd + Shift + 7</span>) one more time.` },
	{ style: I.TextStyle.Bulleted, text: `Phantom lists fixed: "Working with a list could lead to some elements disappearing when working with indentation".` },
	{ style: I.TextStyle.Bulleted, text: `You can finally use tab in the code block.` },
	{ style: I.TextStyle.Bulleted, text: `Code blocks now support even more languages!` },
	{ style: I.TextStyle.Bulleted, text: `"Can't close a modal window on outside-click when 2 modals are open." Fixed.` },
	{ style: I.TextStyle.Bulleted, text: `We've tuned the behaviour of update requests.` },
	{ style: I.TextStyle.Bulleted, text: `Split-merge text blocks in the editor. The carriage now set between the merged blocks.` },
	{ style: I.TextStyle.Bulleted, text: `Updates to the What's New page.` },
	{ style: I.TextStyle.Bulleted, text: `Copying and pasting text from external sources has been fixed.` },
	{ style: I.TextStyle.Bulleted, text: `"Setting some kind of markup leads to whole block deletion." Not anymore!` },
	{ style: I.TextStyle.Bulleted, text: `Fixed first-element highlighting in the menus.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">Ctrl + N</span> and <span class="${sc}">Ctrl + P</span> shortcuts now available to work with lines in macOS.` },
	{ style: I.TextStyle.Bulleted, text: `Import from Notion now supports larger amounts of data.` },
	{ style: I.TextStyle.Bulleted, text: `Turn Into, Align, and Color now works on multiple levels of indentation.` },
	{ style: I.TextStyle.Bulleted, text: `macOS app closing into the Dock by default.` },
	{ text: `... and many other small improvements! ` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 10 June, 2020` },
	{ text: `We value your time and develop a great timesaver for you — now you can transfer data from other sources into Anytype!` },
	{ text: `Open settings in the dashboard or use <span class="${sc}">File → Import</span> in the System menu and try. You can import all your data from Notion with the same structure for now, later we will develop more sources.` },
	{ text: `<img src="./img/help/import.png" class="full">` },
	{ text: `A friendly reminder. Without any imports, you can save note from another app or an article from Wikipedia, and store it forever on your computer. Just copy it there and paste into Anytype. <i>Voila!<i>` },
	{ text: `Please, write us what you think and what source you want to import in&nbsp;Anytype!` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 29 May, 2020` },
	{ style: I.TextStyle.Header3, text: `Mention` },
	{ text: `Now Anytype allows you to refer to any page right in your content.` },
	{ text: `Simply insert the <span class="${sc}">@</span> sign and start typing the name of a page you want to refer to.` },
	{ text: `You can mention any page anywhere and it will build a relationship between pages. All&nbsp;mentions will be shown in the navigation panel. It’s just a more convenient way to connect any pages inside Anytype. Hope you enjoy it and we look forward to your suggestions on how we could make it better.` },
	{ text: `<img src="./img/help/mention.gif" class="full mention">` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 6 May, 2020` },
	{ style: I.TextStyle.Header3, text: `Meet the new navigation` },
	{ text: `All the knowledge we have in our brains organized associatively, not hierarchically. Our&nbsp;brain, in a way, is interconnected wiki. We have multiple connections between ideas or thoughts in our brains - it’s the way we navigate through our memories.` },
	{ text: `We introduce bi-directional links that allow you to connect ideas freely; you can reuse objects and create any information structure you desire.</br>` },
	{ text: `Now you can use a three-line icon <span class="icon nav"></span> on the top left of the application or press <span class="${sc}">Cmd + O</span> to see bi-directional links between pages and navigate through them.` },
	{ text: `You can press <span class="${sc}">Cmd + S</span> and search the right page by name or information in the&nbsp;first&nbsp;paragrapgh.` },
	{},
	{ text: `<b>Now you can stop segmenting and limiting the way you connect your thoughts — just link the pages and flesh everything out more naturally.</b>` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

  { style: I.TextStyle.Header1, text: `Updates for 03 March, 2020` },
	{ style: I.TextStyle.Header3, text: `Introducing Anytype` },
	{ text: `We upgraded the design and backed it up with cutting edge technologies to make your experience safe, secure, and convenient.` },
	{ text: `<span class="bgColor bgColor-yellow">This version of Anytype is suitable for personal usage only</span>. In the next versions we’ll add collaborative functionality.` },

	{ style: I.TextStyle.Header3, text: `Available features` },
	{ style: I.TextStyle.Bulleted, text: `Editor with different kinds of blocks you need to work with notes, ideas, collections, knowledge bases, receipts, diaries, to-do lists, travel plans;` },
	{ style: I.TextStyle.Bulleted, text: `Media content. Organize your space with playable videos, photos, and web bookmarks;` },
	{ style: I.TextStyle.Bulleted, text: `Drag and drop everything in Anytype. Move blocks and create columns. Create pages from your desktop folders. Copy & paste content from other resources;` },
	{ style: I.TextStyle.Bulleted, text: `Page styling. Cover the page with a picture, use emoji or custom image to enhance appearance;` },
	{ style: I.TextStyle.Bulleted, text: `Dashboard. Add your favorite documents, sort them, and archive to reach them in&nbsp;a&nbsp;second.` },
	{},
	{ text: `<b>Create a new home for your information — private and free</b>.` },
	{},
	{ text: `Thank you for building a new web together, writing us a review, reporting a bug, or making a feature request, moving all of us forward. 🙏` },
	{ text: `Don’t forget to <span class="textColor textColor-red">save your seed phrase</span>  to save access to all your private data. All&nbsp;the&nbsp;new features will appear in automatic updates.` }
];
