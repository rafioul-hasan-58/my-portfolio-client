import UpdateBlogPage from "@/app/slices/UpdateBlog";

const UpdateBlog = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#FF0050] text-center mt-10">Update Blog</h1>
            <UpdateBlogPage id={id} />
        </div>
    );
};

export default UpdateBlog;