require('tree-cli')({
    base: '.',    // or any path you want to inspect.
    noreport: true,
    o: ".local/output.txt",
    l: 2,
    ignore: ["node_modules/", ".git/", ".gitignore",".local/"]
})