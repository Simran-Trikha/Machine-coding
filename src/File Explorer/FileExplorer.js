
import FileExplorerList from "./FileExplorerList";
export default function FileExplorer() {
  const data = [
    {
      id: 1,
      name: "Public",
      isFolder: true,
      fileList: [
        {
          id: 2,
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: 3,
      name: "Src",
      isFolder: true,
      fileList: [
        {
          id: 4,
          name: "App.js",
          isFolder: false,
        },
        {
          id: 5,
          name: "index.js",
          isFolder: false,
        },
        {
          id: 6,
          name: "styles.css",
          isFolder: false,
        },
        {
          id: 8,
          name: "Nested Comments",
          isFolder: true,
          fileList: [
            {
              id: 9,
              name: "commnets.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "package.json",
      isFolder: false,
    },
  ];
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <FileExplorerList data={data} />
    </div>
  );
}
