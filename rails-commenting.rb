# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a controller class from a model called BlogPostsContoller and inheriting from the model ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2) This is an instance variable that is set to render all BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3)This is an instance variable set to find a particular post by passing in a parameter id.
    @post = BlogPost.find(params[:id])
  end

  # ---4)This is a method that allows the user to enter information through a form.
  def new
    @post = Post.new
  end

  def create
    # ---5)This is an instance variable that allows us to create a blogs if its vaild redirect to the blog post if not redirect to create a new one.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)This is a method thaat allows you to edit particular entry with find and passing in a parameter.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)this is an instance variable set to update with a parameter if the post is valid redirect to the blog, if not valid return to edit blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This will redirect you to the specific post you are trying to destroy.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This is a way to contol access to your methods so that users dont access methods that are not intended.
  private
  def blog_post_params
    # ---10)This is the guildlines of what a user can put in. It requires a blog and you can pass in a title and content only.
    params.require(:blog_post).permit(:title, :content)
  end

end
