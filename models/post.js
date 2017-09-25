module.exports = (sequelize, Sequelize) => {

    const Post = sequelize.define('post',  {
        postId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {            
            type: Sequelize.STRING,
            allowNull: false
        },
        categorie: {            
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
    }, {
         classMethods: {
            associate: function(models) {
                Post.belongsTo(models.user, {
                    foreignKey: 'userId',
                    onDelete: 'CASCADE'
                });

            }
        }
    });

    this.create = (data) => {
        return Post.create({    });
    };
    
    Post.delete = (id) => {
        return Post.destroy({
            where: {
                postId : id
            }
        });
    };
    return Post;
}