export default function NestedCommentList({ data }) {
    return (
      <div className="comments-container">
        {data.map((c, index) => (
          <div key={index}>
            <div>{c.comment}</div>
            {c.reply?.length && <NestedCommentList data={c.reply} />}
          </div>
        ))}
      </div>
    );
  }
  