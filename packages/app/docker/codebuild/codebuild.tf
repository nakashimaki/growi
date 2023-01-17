module "codebuild" {
  # https://github.com/weseek/terraform-aws-codebuild
  source = "github.com/weseek/terraform-aws-codebuild"

  name                = "growi-official-image-builder"
  description         = "The CodeBuild Project for GROWI official docker image"

  artifact_type       = "NO_ARTIFACTS"

  source_type         = "GITHUB"
  source_location     = "https://github.com/weseek/growi.git"
  source_version      = "refs/heads/support/build-with-codebuild"
  git_clone_depth     = 1

  buildspec           = "packages/app/docker/codebuild/buildspec/root.yml"

  # https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html
  build_image         = "aws/codebuild/amazonlinux2-x86_64-standard:3.0"

  privileged_mode     = true

  cache_type          = "LOCAL"
  local_cache_modes   = ["LOCAL_DOCKER_LAYER_CACHE", "LOCAL_CUSTOM_CACHE"]

}
