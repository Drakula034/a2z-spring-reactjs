package com.a2z.user_service.model.entity;

import com.a2z.user_service.model.entity.Role;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(length = 64, nullable = false, unique = true)
    private String email;

    @Column(name = "first_name", length = 40, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 40, nullable = false)
    private String lastName;

    @Size(min = 6, max = 12)
    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 10)
    private String mobileNumber;

    @Column(length = 64)
    private String photos;

    @Column(nullable = false)
    private boolean enabled;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"),
            uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "role_id"})
    )
    private Set<Role> roles = new HashSet<>();

//    private String createBy;
//    private String updateBy;
//    private String createDate;
//    private String updateDate;


    public void addRole(Role role) {
        this.roles.add(role);
    }

    public boolean getEnabled() {
        return enabled;
    }
}
