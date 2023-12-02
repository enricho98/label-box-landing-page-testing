import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

function deltaToHtml(json, locate) {
	var deltaOps = JSON.parse(json).ops;
	var cfg = {};

	var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

	var html = converter.convert();

	const articleContent = document.getElementById(locate.toString());
	articleContent.innerHTML = html;
}

export { deltaToHtml };
