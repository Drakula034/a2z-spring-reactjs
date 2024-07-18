package com.a2z.user_service.model.entity;

//import javax.persistence.*;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
//@MappedSuperclass
//@Component
@Table(name = "users")
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Userv1 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @Column(name = "user_id")
    private Integer userId;

    @Column(length = 64, nullable = false, unique = true)
    private String email;

    @Column(name = "first_name", length = 40, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 40, nullable = false)
    private String lastName;

    @Column(nullable = false)
    @Size(min = 6, max = 12)
    private String password;

    @Column(nullable = false)
    @Size(min = 10, max = 10)
    private String mobileNumber;

    @Column(length = 64)
    private String photos;

    @Column(nullable = false)
    private boolean enabled;

//    @ManyToMany(fetch = FetchType.EAGER)
//    @JoinTable(
//            name = "users_roles",
//            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
//            inverseJoinColumns =  {@JoinColumn(name = "role_id", referencedColumnName = "id")},
//            uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "role_id"})
//    )
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"),
            uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "role_id"})
    )
    private Set<Role> roles = new HashSet<>();

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public void addRole(Role role) {
        this.roles.add(role);
    }

    public Userv1(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    public boolean getEnabled() {
        return enabled;
    }


}
