import { assets } from "@/Assets/assets";
import Image from "next/image";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const DateBlog = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          width={40}
          height={40}
          alt=""
        />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No Title"}</td>
      <td className="px-6 py-4">{DateBlog.toDateString()}</td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 text-center cursor-pointer"
      >
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
