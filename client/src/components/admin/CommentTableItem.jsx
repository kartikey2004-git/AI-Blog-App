import { Check, Trash2 } from "lucide-react";
import React from "react";

const CommentTableItem = ({ comment, index }) => {
  const { blog, createdAt, _id, name, content, isApproved } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4">{index}</td>
      <td className="px-6 py-4">
        <b className="text-gray-600">Blog:</b> {blog.title} <br />
        <b className="text-gray-600">Name:</b> {name} <br />
        <b className="text-gray-600">Comment:</b> {content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {!isApproved ? (
            <Check className="cursor-pointer text-green-500" />
          ) : (
            <span className="text-green-600 font-medium">Approved</span>
          )}
          <Trash2 className="cursor-pointer text-red-500" />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
