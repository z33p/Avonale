﻿// <auto-generated />
using GitHubRepos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GitHubRepos.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5");

            modelBuilder.Entity("GitHubRepos.Models.FavRepo", b =>
                {
                    b.Property<int>("RepoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("User")
                        .HasColumnType("TEXT");

                    b.HasKey("RepoId");

                    b.ToTable("FavRepo");
                });
#pragma warning restore 612, 618
        }
    }
}
