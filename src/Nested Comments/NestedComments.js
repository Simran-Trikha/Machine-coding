import NestedCommentList from "./NestedCommentsList";
export default function NestedComments() {
  const data = [
    {
      name: "Simran Trikha",
      comment: "first comment",
      reply: [
        {
          comment: "This is my first Comment",
          reply: [],
        },
        {
          comment: "This is my second comment",
          reply: [
            {
              comment: "This is my reply to 2 comment",
              reply: [
                {
                  comment: "This is my reply to the reply of 2 comment",
                  reply: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="App">
      <NestedCommentList data={data} />
    </div>
  );
}
