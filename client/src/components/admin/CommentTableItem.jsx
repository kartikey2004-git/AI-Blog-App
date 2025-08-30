import { Check, Trash2 } from "lucide-react";
import React from "react";

const CommentTableItem = ({ comment, index }) => {
  const { blog, createdAt, _id, name, content, isApproved } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-[#2a2a3f] transition">
      <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{index}</td>
      <td className="px-6 py-4">
        <div className="flex flex-col justify-start items-start">
          <p className="text-gray-800 dark:text-gray-200 mb-1">
            <span className="font-semibold">Blog:</span> {blog.title}
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-1">
            <span className="font-semibold">Name:</span> {name}
          </p>
        </div>
        <br />

        <p className="text-gray-700 dark:text-gray-400 flex items-start justify-start">
          <span className="font-semibold mr-2">Comment:</span>
          <span className="break-words">{content}</span>
        </p>
      </td>

      <td className="px-6 py-4 max-sm:hidden text-gray-700 dark:text-gray-400">
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
