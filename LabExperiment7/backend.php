<?php

$articles = array(
    array("title" => "Article 1", "content" => "Content of article 1"),
    array("title" => "Article 2", "content" => "Content of article 2"),
    array("title" => "Article 3", "content" => "Content of article 3"),
    array("title" => "Article 4", "content" => "Content of article 4"),
    array("title" => "Article 5", "content" => "Content of article 5")
);

$query = $_GET['query'] ?? '';

$results = array_filter($articles, function($article) use ($query) {
    return strpos(strtolower($article['title']), strtolower($query)) !== false;
});

header('Content-Type: application/json');
echo json_encode(array_values($results));
?>
