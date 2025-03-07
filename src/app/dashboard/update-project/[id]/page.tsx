import UpdateProjectPage from "@/src/app/slices/UpdateProject";



const UpdateProject = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-[#FF0050] text-center mt-10">Update</h1>
                <UpdateProjectPage id={id} />
            </div>
        </div>
    );
};

export default UpdateProject;