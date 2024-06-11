package com.a2z.user_service.model.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.*;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Data
@Entity
@Table(name="roles")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Role {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO,generator="native")
    @GenericGenerator(name = "native",strategy = "native")
    private Integer id;

    @Column(name="name",nullable=false,unique=true, length = 20)
    private String name;
    @Column(name="description",nullable=false, length = 100)
    private String description;

    public Role(Integer id){
        this.id = id;
    }
    public Role(String name) {
        this.name = name;
    }

    public Role(String name, String description) {
        super();
        this.name = name;
        this.description = description;
    }

    @Override
    public String toString() {
        return this.name;
    }


}
