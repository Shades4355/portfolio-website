class Api::V1::PortfolioController < ApplicationController
  def index

    portfolio = HTTParty.get('https://api.github.com/users/shades4355/repos')

    projects = []

    portfolio.each do |project|
      projects << {id: project['id'], name: project['name'], url: project['url'], description: project['description']}
    end

    render json: projects
  end
end
