"use client";
import { useState } from "react";
import { FlaskConical, Hash, Copy, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type GeneratedPosts = {
  postText: string;
  hashtags: string[];
};
type Posts = {
  topic: string;
  count: number;
  tone: string;
  generatedPosts: GeneratedPosts[];
};
type PostHistory = {
  id: string;
  generatedPosts: GeneratedPosts[];
};
type PostHistoryType = PostHistory[];
export default function PostPage() {
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState("");
  const [tone, setTone] = useState("Professional");
  const [posts, setPosts] = useState<Posts | null>(null);
  const [postHistory, setPostHistory] = useState<PostHistoryType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchingPostHistory,setFetchingPostHistory] = useState<boolean>(false)

  const handlePostGenerator = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/post", { topic, count, tone });
      setPosts(res.data);
    } catch (err) {
      console.error("Error while generating post", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostHistory = async (e: React.FormEvent) => {
    setFetchingPostHistory(true)
    try {
      const res = await axios.get("/api/post");
      console.log(res.data);
      setPostHistory(res.data);
    } catch (err) {
      console.error(err);
    }finally{
      setFetchingPostHistory(false)
    }
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    
      <div className="flex items-center justify-between gap-2 p-4 border-b bg-white/60 backdrop-blur sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <FlaskConical className="w-7 h-7 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">Post Generator</h1>
        </div>
        <Button
          onClick={handlePostHistory}
          size="sm"
          variant="outline"
          disabled={fetchingPostHistory}
          className="flex items-center gap-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
        >
          <History className="w-4 h-4" /> {fetchingPostHistory? "Getting...":"Post History"} 
        </Button>
      </div>

      <div className="flex-1  p-4 space-y-10 max-w-4xl mx-auto w-full">
       
        <motion.form
          onSubmit={handlePostGenerator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-gray-200 p-4"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Craft Your Perfect Post
          </h2>
          <p className="text-sm text-gray-500">
            Fill in the details and let LinkFly generate professional posts for
            you.
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Topic
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter your post Topic..."
              rows={3}
              required
              className="w-full p-4 rounded-2xl border border-gray-300 bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full rounded-xl">
                    {tone}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select Tone</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={tone} onValueChange={setTone}>
                    <DropdownMenuRadioItem value="Professional">
                      Professional
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Friendly">
                      Friendly
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Serious">
                      Serious
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Posts
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full rounded-xl">
                    {count || "Select"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select Count</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={count}
                    onValueChange={setCount}
                  >
                    <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              disabled={loading}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-2xl shadow-lg"
            >
              {loading ? "Generating..." : "Generate Post"}
            </Button>
          </div>
        </motion.form>

       
        {posts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className=" text-2xl font-bold text-gray-800 border-b border-gray-100">
              Generated Posts{" "}
            </h2>
            {posts.generatedPosts.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white/80 backdrop-blur-md border rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      copyToClipboard(
                        `${g.postText}\n\n${g.hashtags.join(" ")}`
                      )
                    }
                    className="hover:bg-blue-100 rounded-full"
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Post {i + 1}
                </h3>
                <p className="text-gray-700 leading-relaxed">{g.postText}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {g.hashtags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-xs rounded-full shadow-sm"
                    >
                      #{tag.replace("#", "")}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

       
        {postHistory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2">
              <History className="w-6 h-6 text-blue-600" /> Post History
            </h2>

            {postHistory.map((item, i) => (
              <div key={`${item.id} - ${i}`} className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  History {i + 1}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  {item.generatedPosts.map((post, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="relative bg-white/80 backdrop-blur-md border rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                    >
                      <div className="absolute top-4 right-4">
                        <Button
                          variant={"ghost"}
                          size={"icon"}
                          onClick={() =>
                            copyToClipboard(
                              `${post.postText}\n\n${post.hashtags.join(" ")}`
                            )
                          }
                          className="hover:bg-blue-50 rounded-full"
                        >
                          <Copy className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>
                      <p className="text-gray-800 leading-relaxed">
                        {post.postText}
                      </p>

                      <div className="flex gap-2 flex-wrap mt-4">
                        {post.hashtags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-3 py-1 text-xs rounded-full shadow-sm "

                          >
                            #{tag.replace("#", "")}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
