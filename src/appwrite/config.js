import conf from "../conf/conf";
import { Client, Databases, Query, Storage } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (error) {
            console.error("[Appwrite Service] Error in createPost:", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (error) {
            console.error("[Appwrite Service] Error in updatePost:", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error("[Appwrite Service] Error in deletePost:", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.error("[Appwrite Service] Error in getPost:", error);
        }
    }

    async getPosts(queries =[Query.equal("status","active")]){
        try {
             return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                queries,
             )
        } catch (error) {
            console.log("Appwrite serive :: getPosts:: error".error);
            
        }

    }

    async uploadFile (file){
        try{
             return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
             )
        }catch(error){
            console.log("Appwrite serive:: uploadFile::")
        }
    }

    
}

const service = new Service();
export default service;
