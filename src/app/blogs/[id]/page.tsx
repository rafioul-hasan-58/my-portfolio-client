import BlogDetailsCard from "../../componets/card/BlogDetailsCard";

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://my-fifth-assignment-server.vercel.app/get-single-blog/${id}`)
    const data = await res.json();
    const blog = data?.data
    return (
        <div>
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetails;