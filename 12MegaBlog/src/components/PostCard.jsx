import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
    const imageUrl = appwriteService.getFilePreview(featuredImage);

    console.log("Featured Image ID:", featuredImage);
    console.log("Image URL:", imageUrl);

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="rounded-xl w-full h-48 object-cover"
                    />
                </div>

                <h2 className="text-xl font-bold">
                    {title}
                </h2>
            </div>
        </Link>
    );
}

export default PostCard;