# Builds the site from src/:
#   src/head.html + src/styles.css + src/shell.html + src/content.js + src/app.js
# -> dist/portfolio.html (artifact body) and index.html (standalone, for local use / GitHub / Vercel)
import pathlib
R = pathlib.Path(__file__).parent; S = R/'src'
rd = lambda n: (S/n).read_text(encoding='utf-8')
head, css = rd('head.html'), rd('styles.css')
body_inner = rd('shell.html') + '\n<script>\n' + rd('content.js') + '\n' + rd('app.js') + '\n</script>\n'
artifact = head + '<style>\n' + css + '</style>\n' + body_inner
(R/'dist').mkdir(exist_ok=True); (R/'dist/portfolio.html').write_text(artifact, encoding='utf-8')
index = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
         '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
         '<meta name="description" content="Blanca Serrano, senior product designer. A portfolio that adapts to what you are looking for.">\n'
         + head + '<style>\n' + css + '</style>\n</head>\n<body>\n' + body_inner + '</body>\n</html>\n')
(R/'index.html').write_text(index, encoding='utf-8')
print('built index.html and dist/portfolio.html')
