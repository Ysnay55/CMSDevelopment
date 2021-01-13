<?php

add_action( 'wp_enqueue_scripts', 'tt_child_enqueue_parent_styles' );

function tt_child_enqueue_parent_styles() {

wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );

}
add_action('init', function () {

    register_post_type('brand', [
    
    'public' => true,
    
    'label' => 'Brands',
    
    'show_in_graphql' => true,
    
    'graphql_single_name' => 'Brand',
    
    'graphql_plural_name' => 'Brands',
    
    ]);
    
    });

add_action('init', function() {

    register_taxonomy( 'model', 'brand', [
    
    'public' => true,
    
    'labels' => [
    
    'name' => _x( 'Model', 'taxonomy general name' ),
    
    'singular_name' => _x( 'Model', 'taxonomy singular name' ),
    
    'search_items' => __( 'Search Models' ),
    
    'popular_items' => __( 'Popular Models' ),
    
    'all_items' => __( 'All Models' ),
    
    'parent_item' => null,
    
    'parent_item_colon' => null,
    
    'edit_item' => __( 'Edit Model' ),
    
    'update_item' => __( 'Update Model' ),
    
    'add_new_item' => __( 'Add New Model' ),
    
    'new_item_name' => __( 'New Model Name' ),
    
    'separate_items_with_commas' => __( 'Separate models with commas' ),
    
    'add_or_remove_items' => __( 'Add or remove models' ),
    
    'choose_from_most_used' => __( 'Choose from the most used models' ),
    
    'menu_name' => __( 'Models' ),
    
    ],
    
    'show_in_graphql' => true,
    
    'show_admin_column' => true,
    
    'graphql_single_name' => 'model',
    
    'graphql_plural_name' => 'models',
    
    ]);
    
    });

?>