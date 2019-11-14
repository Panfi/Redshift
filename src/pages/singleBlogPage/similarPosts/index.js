import React from 'react'

export default function SimilarPosts({similarposts, recentposts, onPost}) {
    return (
        <div
            style={{
                marginTop: 20,
                height: 760,
                width: 300,
                maxWidth: "100%",
                boxShadow: "0px 2px 3px 3px rgba(195,195,195, 0.4)",
                padding: "40px 0px 40px 40px"
            }}
        >
            <div style={{ marginBottom: 30, }}>
                <div
                    style={{
                        width: 30,
                        height: 5,
                        backgroundColor: "red",
                        marginBottom: 5
                    }}
                />
                <h4 style={{ fontWeight: "bold" }}>
                    SIMILAR POST
                                    </h4>
                <div style={{ listStyle: "none", marginTop: 20 }}>
                    {similarposts.map(item => (
                        <div
                            className="category-list"
                            style={{
                                color: "#888888",
                                fontSize: 14,
                                marginBottom: 5,
                                cursor: "pointer"
                            }}
                            onClick={() => onPost(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginBottom: 30, }}>
                <div
                    style={{
                        width: 30,
                        height: 5,
                        backgroundColor: "red",
                        marginBottom: 5
                    }}
                />
                <h4 style={{ fontWeight: "bold" }}>
                    RECENT POSTS
                                    </h4>
                <div style={{ listStyle: "none", marginTop: 20 }}>
                    {recentposts.map(item => (
                        <div
                            className="category-list"
                            style={{
                                color: "#888888",
                                fontSize: 14,
                                marginBottom: 5,
                                cursor: "pointer"
                            }}
                            onClick={() => onPost(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
