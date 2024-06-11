package com.a2z.user_service.model.entity;

//import javax.persistence.*;

import com.a2z.user_service.model.entity.Role;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
//@MappedSuperclass
@Component
@Table(name = "users")
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
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
    private String mobileNumber = "1234567890";

    @Column(length = 64)
    private String photos;

    @Column(nullable = false)
    private boolean enabled;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
//    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
//    @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
//    private Set<Role> roles = new HashSet<>();

    public void addRole(Role role) {
        this.roles.add(role);
    }

    public User(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    public boolean getEnabled() {
        return enabled;
    }


}
