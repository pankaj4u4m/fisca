import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"responsibility-of-contributors\">Responsibility of Contributors</h4>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed</p>\n<p>pretium, aliquam sit. Praesent elementum magna amet, tincidunt eros, nibh in leo. Malesuada purus, lacus, at aliquam suspendisse tempus. Quis tempus amet, velit nascetur sollicitudin. At sollicitudin eget amet in. Eu velit nascetur sollicitudin erhdfvssfvrgss eget viverra nec elementum. Lacus, facilisis tristique lectus in.</p>\n<h4 id=\"gathering-of-personal-information\">Gathering of Personal Information</h4>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed</p>\n<h4 id=\"protection-of-personal--information\">Protection of Personal- Information</h4>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.</p>\n<p>Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat</p>\n<h4 id=\"privacy-policy-changes\">Privacy Policy Changes</h4>\n<ol>\n<li>Sll the Themefisher items are designed to be with the latest , We check all</li>\n<li>comments that threaten or harm the reputation of any person or organization</li>\n<li>personal information including, but limited to, email addresses, telephone numbers</li>\n<li>Any Update come in The technology Customer will get automatic Notification.</li>\n</ol>";

				const frontmatter = {"title":"Politica sulla riservatezza","description":"this is meta description","draft":false};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/pages/it/privacy-policy.md";
				const url = "/it/privacy-policy";
				function rawContent() {
					return "\n#### Responsibility of Contributors\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed\n\npretium, aliquam sit. Praesent elementum magna amet, tincidunt eros, nibh in leo. Malesuada purus, lacus, at aliquam suspendisse tempus. Quis tempus amet, velit nascetur sollicitudin. At sollicitudin eget amet in. Eu velit nascetur sollicitudin erhdfvssfvrgss eget viverra nec elementum. Lacus, facilisis tristique lectus in.\n\n#### Gathering of Personal Information\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus. Molestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed\n\n#### Protection of Personal- Information\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat quisque aliquam sagittis. Sem turpis sed viverra massa gravida pharetra. Non dui dolor potenti eu dignissim fusce. Ultrices amet, in curabitur a arcu a lectus morbi id. Iaculis erat sagittis in tortor cursus.\n\nMolestie urna eu tortor, erat scelerisque eget. Nunc hendrerit sed interdum lacus. Lorem quis viverra sed\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, donec nunc eros, ullamcorper id feugiat\n\n#### Privacy Policy Changes\n\n1. Sll the Themefisher items are designed to be with the latest , We check all\n2. comments that threaten or harm the reputation of any person or organization\n3. personal information including, but limited to, email addresses, telephone numbers\n4. Any Update come in The technology Customer will get automatic Notification.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"responsibility-of-contributors","text":"Responsibility of Contributors"},{"depth":4,"slug":"gathering-of-personal-information","text":"Gathering of Personal Information"},{"depth":4,"slug":"protection-of-personal--information","text":"Protection of Personal- Information"},{"depth":4,"slug":"privacy-policy-changes","text":"Privacy Policy Changes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
