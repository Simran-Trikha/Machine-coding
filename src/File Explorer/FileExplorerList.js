export default function FileExplorerList({ data }) {
  return (
    <div className="file-explorer-container">
      {data.map((item, index) => (
        <div className="file-list-container">
          <div className="file-edit-container">
            {item.name}
            {item.isFolder && <div> ✍🏻</div>}
          </div>
          {item.isFolder && item.fileList.length > 0 && (
            <div className="file-inner-list-container">
              <FileExplorerList data={item.fileList} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
